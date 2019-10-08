/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QDA010', {
    QDA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDA_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QDA_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QDA_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QDA_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QDA_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QDA_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDA_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDA_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDA_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QDA_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QDA_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    QDA_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDA_DTFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QDA_FILF1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDA_MAT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDA_FILF2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDA_MAT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDA_FILF3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QDA_MAT3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QDA_CONVOC: {
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
    tableName: 'QDA010'
  });
};
