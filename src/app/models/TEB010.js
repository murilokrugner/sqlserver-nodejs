/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEB010', {
    TEB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEB_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TEB_FONTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEB_TRATAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEB_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    TEB_EFICIE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TEB_NIVELT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEB_COMPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEB_TIPOEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEB_CORHID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEB_CORPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEB_OUTCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    TEB_EMPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEB_LOJREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEB_TPSOLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEB_OUTSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    TEB_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TEB010'
  });
};
