/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL9010', {
    EL9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL9_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL9_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL9_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL9_SEQPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL9_NROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EL9_STTSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL9_DTPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL9_VLCAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL9_VLEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL9_EQVL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL9_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL9_TX_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EL9_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    EL9_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EL9_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL9_DTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL9_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EL9_DTCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL9_PARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL9_NRINVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EL9_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL9_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL9_TPINT: {
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
    tableName: 'EL9010'
  });
};
