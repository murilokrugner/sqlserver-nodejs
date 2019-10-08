/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QF2010', {
    QF2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF2_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QF2_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF2_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QF2_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QF2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QF2_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QF2_FILQLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF2_MATQLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QF2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QF2_DTLAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QF2_HRLAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QF2_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QF2_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QF2_DEPTOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QF2_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QF2_HORENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QF2_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QF2_CHAVE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QF2_ENCERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QF2_ENCQLD: {
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
    tableName: 'QF2010'
  });
};
