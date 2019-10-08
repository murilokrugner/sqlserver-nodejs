/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QI3010', {
    QI3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI3_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI3_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI3_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QI3_ABERTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI3_ENCPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI3_ENCREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI3_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI3_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI3_PROBLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_RESESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_RESATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI3_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_OBSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI3_MOTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_SIGILO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI3_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI3_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'QI3010'
  });
};
