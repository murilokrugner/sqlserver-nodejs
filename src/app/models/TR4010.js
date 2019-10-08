/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TR4010', {
    TR4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR4_NUMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR4_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TR4_DTANAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TR4_HRANAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TR4_DESTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TR4_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR4_SULCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TR4_PAREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TR4_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR4_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TR4_DTANFN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TR4_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TR4_ACEITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TR4_PERCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TR4_VLCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TR4_INDAPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TR4_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TR4_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TR4_NUMSE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'TR4010'
  });
};
