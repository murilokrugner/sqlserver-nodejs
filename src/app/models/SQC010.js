/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQC010', {
    QC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QC_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QC_ADMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QC_DEMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QC_EMPRESA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QC_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QC_ATIVIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QC_CARGOIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QC_DTALTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    }
  }, {
    tableName: 'SQC010'
  });
};
