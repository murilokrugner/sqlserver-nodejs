/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBH010', {
    TBH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TBH_CODOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBH_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TBH_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TBH_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TBH_ABERTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TBH_FECHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TBH_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TBH_PRIORI: {
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
    },
    TBH_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TBH_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBH010'
  });
};
