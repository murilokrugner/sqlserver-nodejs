/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKP010', {
    QKP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKP_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKP_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKP_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKP_LEGEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QKP_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QKP_CODATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QKP_ATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKP_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKP_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKP_DTPRAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKP_DTPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKP_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKP_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKP_PCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKP_RISCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKP_RISREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKP_RISPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKP_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKP_AVEMAI: {
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
    tableName: 'QKP010'
  });
};
