/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RA3010', {
    RA3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA3_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA3_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA3_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA3_TURMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA3_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA3_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA3_NVEZAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA3_SEQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA3_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA3_DTAVIS: {
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
    },
    RA3_MEMINT: {
      type: "IMAGE",
      allowNull: true
    },
    RA3_PORTAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RA3010'
  });
};
